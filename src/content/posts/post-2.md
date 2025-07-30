---
title: "The Qubits in Virtual Particles"
pubDate: 2022-11-10
description: "How virtual particles - the core of fundamental interactions - have a hidden qubit structure."
author: goncalo-quinta
image:
  url: ""
  alt: ""
extra:
  - math
draft: false
---


## Virtual Particles: The Essence of Quantum Field Theory

<div style="text-align: justify">

The fundamental forces of Nature act on particles in complicated ways. Nevertheless, the same basic quantities are systematically manipulated in all calculations. One particularly important quantity is the so-called propagator of a particle. For a fermion, this is represented as a $4 \times 4$ matrix, of the form

$$ D_{F}(k) = \frac{1}{\sqrt{2M_k(k_0+M_k)}}\begin{pmatrix} k_0+M_k & 0 & k_3 & k_1 - i k_2 \\ 0 & k_0+M_k & k_1 + i k_2 & -k_3 \\ k_3 & k_1 -i k_2 & k_0+M_k & 0 \\ k_1 + i k_2 & -k_3 & 0 & k_0+M_k \end{pmatrix}$$

where $k^{\mu}$ is a momentum 4-vector and $M_k = \sqrt{k^2_0-k^2_1-k^2_2-k^2_3}$ is called off-shell mass. The latter mass is associated to a so-called virtual particle, as is the propagator itself. The particle is called virtual since it's mass, given my $M_k$, doesn't follow the standard energy-momentum relation $E^2 = m^2 + k^4$ discovered by Einstein. A virtual particle is usally depicted by an internal line in a special type of diagram, called Feynman diagrams, like the one in the picture below:

![](/img/plots/MollerScattering.webp)

In this case it represents an electrodynamic scattering of two electrons. 

</div>



## The Qubit Structure of Virtual Fermions

<div style="text-align: justify">

One interesting fact that has been overlooked in the literature until now is that the propagator of a fermion has the same dimensions as a $2 \times 2$ qubit state. It does not, however, satisfy the addition requirements of hermiticity and unity trace. Nevertheless, the slightly modified form can easily fix these issues:

$$ \check{\rho}(k) = \left(\frac{k^2-m^2}{4k_0}\right) D_{F}(k)\gamma_0  $$

The matrix $\check{\rho}(k)$ does indeed represent a well-defined density matrix, in the cases where the off-shell mass $M_k$ exceeds in value the rest mass $m$. The two qubits in $\check{\rho}(k)$ are shown to be associated to particle charge and spin, both of which can only assume 2 values for a fermion.

A particularly interesting property of $\check{\rho}(k)$ is that it can be written in the thermal form

$$ \check{\rho}(k) = \frac{e^{-\beta H}}{\textrm{Tr}[e^{-\beta H}]} $$

where $r_k = E_k/k_0$ is the ratio between the off-shell and on-shell energies and

$$ \beta = \frac{1}{2k_0}\log\left(\frac{1+r_k}{1-r_k}\right) $$

is the inverse temperature of the quantum state. In other words, virtual particles have a temperature.


</div>


## Particle Scatterings as Quantum Computations

<div style="text-align: justify">
One immediate consequence of the qubit interpretation of the propagator is that any quantum interaction in particle physics has an associated quantum circuit. For example, the creation of a pair of virtual fermions from a free photon can be represented in two ways, as depicted by the figure below:

![The plot thickens.](/img/plots/virtual_pair.webp)

On the left, we have the typical Feynman diagramatic view, while on the right we have the quantum circuit analog.

</div>




