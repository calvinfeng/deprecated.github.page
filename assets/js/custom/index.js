const london1 = document.getElementById('london-eqn-1');
const london2 = document.getElementById('london-eqn-2');
const bloch = document.getElementById('bloch');

katex.render(`\\frac{\\partial j_{s}}{\\partial t} =\\frac{n_{s}e^{2}}{m}E`, london1);
katex.render(`\\nabla\\times j_{s} = -\\frac{n_{s}e^{2}}{m}B`, london2);
katex.render(`\\psi(\\vec{r}) = u(r)e^{i k \\cdot \\vec{r}}`, bloch);
