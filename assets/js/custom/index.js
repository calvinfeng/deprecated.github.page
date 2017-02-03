"use strict";

// Author(s): Calvin J. Feng

(function() {
    const london1 = `\\frac{\\partial j_{s}}{\\partial t} =\\frac{n_{s}e^{2}}{m}E`;
    katex.render(london1, document.getElementById('london-eqn-1'));

    const london2 =`\\nabla\\times j_{s} = -\\frac{n_{s}e^{2}}{m}B`;
    katex.render(london2, document.getElementById('london-eqn-2'));

    const bloch = `\\psi(\\vec{r}) = u(r)e^{i k \\cdot \\vec{r}}`;
    katex.render(bloch, document.getElementById('bloch'));
})();
