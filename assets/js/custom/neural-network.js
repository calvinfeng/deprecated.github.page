"use strict";

// Author(s): Calvin J. Feng
/* global katex hljs */

(function() {
    hljs.initHighlightingOnLoad();
    const sigmoid = `g(z) = \\frac{1}{1 + e^{-z}}`;
    katex.render(sigmoid, document.getElementById('sigmoid'));

    const classDefinition = `\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}
        \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}
        \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}`;
    katex.render(classDefinition, document.getElementById('class-definition'));

    const theta = `\\Theta^{(1)} = \\begin{bmatrix}
        \\theta_{00} & \\theta_{01} & \\theta_{02} & \\theta_{03} & \\theta_{04} \\\\
        \\theta_{10} & \\theta_{11} & \\theta_{12} & \\theta_{13} & \\theta_{14} \\\\
        \\theta_{20} & \\theta_{21} & \\theta_{22} & \\theta_{23} & \\theta_{24} \\\\
        \\theta_{30} & \\theta_{31} & \\theta_{32} & \\theta_{33} & \\theta_{34}
        \\end{bmatrix}
        \\Theta^{(2)} = \\begin{bmatrix}
        \\theta_{00} & \\theta_{01} & \\theta_{02} & \\theta_{03} & \\theta_{04} \\\\
        \\theta_{10} & \\theta_{11} & \\theta_{12} & \\theta_{13} & \\theta_{14} \\\\
        \\theta_{20} & \\theta_{21} & \\theta_{22} & \\theta_{23} & \\theta_{24}
        \\end{bmatrix}`;
    katex.render(theta, document.getElementById('theta'));

    // Activation vectors
    const aVector = `\\vec{a}^{(1)} = \\begin{bmatrix} \\\\
        x_{1} \\\\ x_{2} \\\\ x_{3} \\\\ x_{4} \\end{bmatrix}
        \\vec{a}^{(2)} = \\begin{bmatrix} 1 \\\\ a_{1} \\\\ a_{2} \\\\ a_{3} \\\\ a_{4}
        \\end{bmatrix}
        \\vec{a}^{(3)} = \\begin{bmatrix} a_{1} \\\\ a_{2} \\\\ a_{3}
        \\end{bmatrix}`;
    katex.render(aVector, document.getElementById('a-vector'));

    const forwardProp1 = `\\Theta^{(1)} a^{(1)} = \\begin{bmatrix}
        \\theta_{00} & \\theta_{01} & \\theta_{02} & \\theta_{03} & \\theta_{04} \\\\
        \\theta_{10} & \\theta_{11} & \\theta_{12} & \\theta_{13} & \\theta_{14} \\\\
        \\theta_{20} & \\theta_{21} & \\theta_{22} & \\theta_{23} & \\theta_{24} \\\\
        \\theta_{30} & \\theta_{31} & \\theta_{32} & \\theta_{33} & \\theta_{34}
        \\end{bmatrix}
        \\begin{bmatrix}
        1 \\\\ x_{1} \\\\ x_{2} \\\\ x_{3} \\\\ x_{4} \\end{bmatrix} =
        \\vec{z}^{(2)} = \\begin{bmatrix}
        \\theta_{00} + \\theta_{01}x_{1} + \\theta_{02}x_{2} + \\theta_{03}x_{3} + \\theta_{04}x_{4} \\\\
        \\theta_{10} + \\theta_{11}x_{1} + \\theta_{12}x_{2} + \\theta_{13}x_{3} + \\theta_{14}x_{4} \\\\
        \\theta_{20} + \\theta_{21}x_{1} + \\theta_{22}x_{2} + \\theta_{23}x_{3} + \\theta_{24}x_{4} \\\\
        \\theta_{30} + \\theta_{31}x_{1} + \\theta_{32}x_{2} + \\theta_{33}x_{3} + \\theta_{34}x_{4}
        \\end{bmatrix}`;
    katex.render(forwardProp1, document.getElementById('forward-prop-1'));

    const forwardProp2 = `a^{(2)} = g(z^{(2)})`;
    katex.render(forwardProp2, document.getElementById('forward-prop-2'));

    const forwardProp3 = `\\Theta^{(2)} a^{(2)} = \\begin{bmatrix}
        \\theta_{00} & \\theta_{01} & \\theta_{02} & \\theta_{03} & \\theta_{04} \\\\
        \\theta_{10} & \\theta_{11} & \\theta_{12} & \\theta_{13} & \\theta_{14} \\\\
        \\theta_{20} & \\theta_{21} & \\theta_{22} & \\theta_{23} & \\theta_{24}
        \\end{bmatrix}
        \\begin{bmatrix} 1 \\\\ a_{1} \\\\ a_{2} \\\\ a_{3} \\\\ a_{4} \\end{bmatrix} =
        \\vec{z}^{(3)} = \\begin{bmatrix}
        \\theta_{00} + \\theta_{01}a_{1} + \\theta_{02}a_{2} + \\theta_{03}a_{3} + \\theta_{04}a_{4}\\\\
        \\theta_{10} + \\theta_{11}a_{1} + \\theta_{12}a_{2} + \\theta_{13}a_{3} + \\theta_{14}a_{4}\\\\
        \\theta_{20} + \\theta_{21}a_{1} + \\theta_{22}a_{2} + \\theta_{23}a_{3} + \\theta_{24}a_{4}
        \\end{bmatrix}`;
    katex.render(forwardProp3, document.getElementById('forward-prop-3'));

    const forwardProp4 = `a^{(3)} = g(z^{(3)})`;
    katex.render(forwardProp4, document.getElementById('forward-prop-4'));

    const backProp1 = `\\delta^{(3)} = a^{(3)} - \\vec{y}`;
    katex.render(backProp1, document.getElementById('back-prop-1'));

    const backProp2 = `\\delta^{(2)} = (\\Theta^{(2)})^{T}\\delta^{(3)}\\cdot* g'(z^{(2)}) =
        \\begin{bmatrix}
        \\theta_{00} & \\theta_{10} & \\theta_{20} \\\\
        \\theta_{01} & \\theta_{11} & \\theta_{21} \\\\
        \\theta_{02} & \\theta_{12} & \\theta_{22} \\\\
        \\theta_{03} & \\theta_{13} & \\theta_{23} \\\\
        \\theta_{04} & \\theta_{14} & \\theta_{24}
        \\end{bmatrix}
        \\begin{bmatrix} \\delta^{(3)}_{1} \\\\ \\delta^{(3)}_{2} \\\\ \\delta^{(3)}_{3}
        \\end{bmatrix} \\cdot* g'(z^{(2)})`;
    katex.render(backProp2, document.getElementById('back-prop-2'));

    const backProp3 = `g'(z^{(2)}) = a^{(2)}\\cdot*(1 - a^{(2)}) = \\begin{bmatrix}
        1(1 - 1)\\\\ a_{1}(1 - a_{1})\\\\ a_{2}(1 - a_{2})\\\\ a_{3}(1 - a_{3})\\\\ a_{4}(1 - a_{4})
        \\end{bmatrix}`;
    katex.render(backProp3, document.getElementById('back-prop-3'));

    const partial1 = `\\Delta^{(1)} = \\begin{bmatrix}
        0 & 0 & 0 & 0 & 0\\\\
        0 & 0 & 0 & 0 & 0\\\\
        0 & 0 & 0 & 0 & 0\\\\
        0 & 0 & 0 & 0 & 0
        \\end{bmatrix}
        \\Delta^{(2)} = \\begin{bmatrix}
        0 & 0 & 0 & 0 & 0\\\\
        0 & 0 & 0 & 0 & 0\\\\
        0 & 0 & 0 & 0 & 0
        \\end{bmatrix}`;
    katex.render(partial1, document.getElementById('partial-1'));

    const partial2 = `\\Delta^{(l)}_{ij} += a_{j}^{(l)}\\delta_{i}^{(l+1)}`;
    katex.render(partial2, document.getElementById('partial-2'));

    const partial3 = `\\frac{\\partial}{\\partial\\Theta_{ij}^{(l)}}J =
        \\frac{1}{m}\\Delta_{ij}^{(l)}`;
    katex.render(partial3, document.getElementById('partial-3'));

    const partial4 = `\\frac{\\partial}{\\partial\\Theta_{ij}^{(l)}}J =
        \\frac{1}{m}\\Delta_{ij}^{(l)} + \\lambda\\Theta_{ij}^{(l)}`;
    katex.render(partial4, document.getElementById('partial-4'));

    const gradient1 = `\\Theta_{ij}^{(l)} = \\Theta_{ij}^{(l)} -
        \\alpha\\frac{\\partial}{\\partial\\Theta_{ij}^{(l)}}J`;
    katex.render(gradient1, document.getElementById('gradient-1'));

    const costFunction = `J(\\Theta) = \\frac{\\lambda}{2m}\\sum^{L - 1}_{l = 1}\\sum^{rows}_{i=1}
        \\sum^{cols}_{j=1}(\\Theta^{(l)}_{ij})^{2} - \\frac{1}{m}\\left[\\sum^{m}_{i=1}\\sum^{K}_{k=1}y_{k}^{(i)}
        log(h_{\\Theta}(x^{(i)}))_{k} + (1 - y_{k}^{(i)})log(1 - (h_{\\Theta}(x^{(i)}))_{k})\\right]`;
    katex.render(costFunction, document.getElementById('cost-function'));

    const partialApprox = `\\frac{\\partial}{\\partial\\theta^{(l)}_{ij}}J_{\\Theta}\\approx
        \\frac{J_{\\Theta}(\\theta^{(l)}_{ij} + \\epsilon) - J_{\\Theta}(\\theta^{(l)}_{ij} - \\epsilon)}
        {2\\epsilon}`;
    katex.render(partialApprox, document.getElementById('partial-approx'));

    // let params = [
    //   [[-0.894, -0.236, -0.947, 1.673, 0.725],
    //   [-0.389, 0.298, 0.871, -1.320, -0.574],
    //   [4.335, 1.593, 1.662, -2.848, -3.070],
    //   [1.017, 0.254, 1.066, -1.937, -0.786]],
    //   [[-1.677, -2.871, 1.630, 0.918, 2.844],
    //   [-4.085, 1.729, -1.258, 4.815, -3.034],
    //   [1.377, 1.129, -0.732, -5.129, -0.692]]
    // ];

    const params1 = `\\Theta^{(1)} = \\begin{bmatrix}
        -0.894 & -0.236 & -0.947 & 1.673 & 0.725 \\\\
        -0.389 & 0.298 & 0.871 & -1.320 & -0.574 \\\\
        4.335 & 1.593 &  1.662 & -2.848 & -3.070 \\\\
        1.017 & 0.254 & 1.066 & -1.937 & -0.786
        \\end{bmatrix}`;
    katex.render(params1, document.getElementById('params-1'));

    const params2 = `\\Theta^{(2)} = \\begin{bmatrix}
        -1.677 & -2.871 & 1.630 & 0.918 & 2.844 \\\\
        -4.085 & 1.729 & -1.258 & 4.815 & -3.034 \\\\
        1.377 & 1.129 & -0.732 & -5.129 & -0.692
        \\end{bmatrix}`;
    katex.render(params2, document.getElementById('params-2'));

})();
