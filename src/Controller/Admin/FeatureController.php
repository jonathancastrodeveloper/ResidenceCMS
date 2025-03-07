<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Entity\Feature;
use App\Form\Type\FeatureType;
use App\Repository\FeatureRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\Form\ClickableInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class FeatureController extends BaseController
{
    #[Route(path: '/admin/feature', name: 'admin_feature')]
    public function index(Request $request, FeatureRepository $repository): Response
    {
        return $this->render('admin/feature/index.html.twig', [
            'site' => $this->site($request),
            'features' => $repository->findAll(),
        ]);
    }

    #[Route(path: '/admin/feature/new', name: 'admin_feature_new')]
    public function new(Request $request): Response
    {
        $feature = new Feature();

        $form = $this->createForm(FeatureType::class, $feature)
            ->add('saveAndCreateNew', SubmitType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->doctrine->getManager();
            $em->persist($feature);
            $em->flush();

            $this->addFlash('success', 'message.created');

            /** @var ClickableInterface $button */
            $button = $form->get('saveAndCreateNew');
            if ($button->isClicked()) {
                return $this->redirectToRoute('admin_feature_new');
            }

            return $this->redirectToRoute('admin_feature');
        }

        return $this->render('admin/feature/new.html.twig', [
            'site' => $this->site($request),
            'feature' => $feature,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Displays a form to edit an existing Feature entity.
     */
    #[Route(path: '/admin/feature/{id<\d+>}/edit', name: 'admin_feature_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Feature $feature): Response
    {
        $form = $this->createForm(FeatureType::class, $feature);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->doctrine->getManager()->flush();
            $this->addFlash('success', 'message.updated');

            return $this->redirectToRoute('admin_feature');
        }

        return $this->render('admin/feature/edit.html.twig', [
            'site' => $this->site($request),
            'form' => $form->createView(),
        ]);
    }

    /**
     * Deletes a Feature entity.
     */
    #[Route(path: '/feature/{id<\d+>}/delete', name: 'admin_feature_delete', methods: ['POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function delete(Request $request, Feature $feature): Response
    {
        if (!$this->isCsrfTokenValid('delete', $request->request->get('token'))) {
            return $this->redirectToRoute('admin_feature');
        }

        $em = $this->doctrine->getManager();
        $em->remove($feature);
        $em->flush();
        $this->addFlash('success', 'message.deleted');

        return $this->redirectToRoute('admin_feature');
    }
}
