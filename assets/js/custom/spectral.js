"use strict";

// Author(s): Calvin J. Feng

(function() {
    /* global katex */
    const NJW = `\\mathbf{argmin}\\space f^{T}D^{-\\frac{1}{2}}WD^{-\\frac{1}{2}}f`;
    katex.render(NJW, document.getElementById('ng-jordan-weiss'));

    const matrixDerivative = `\\frac{\\partial}{\\partial\\vec{x}}
        (\\space x^{T}A\\space x) = (A + A^{T})\\vec{x}`;
    katex.render(matrixDerivative, document.getElementById('matrix-derivative'));

    const symmetricMatrix = `A = A^{T}`;
    katex.render(symmetricMatrix, document.getElementById('symmetric-matrix'));

    const constraintDefinition = `g(x, y, z) = k`;
    katex.render(constraintDefinition, document.getElementById('constraint-definition'));

    const lagrangianDefinition = `L = f(x, y, z) - \\lambda (g(x, y, z) - k)`;
    katex.render(lagrangianDefinition, document.getElementById("lagrangian-definition"));

    const argminMatrix = `\\mathbf{argmin} \\space x^{T}A \\space x
    \\space\\space\\space\\space \\space s.t. \\space\\space\\space\\space\\space x^{T}x = C`;
    katex.render(argminMatrix, document.getElementById('argmin-matrix'));

    const matrixLagrangian = `L = x^{T}A\\space x - \\lambda(x^{T}x - C)`;
    katex.render(matrixLagrangian, document.getElementById('matrix-langrangian'));

    const adjacencyMatrix = `W = \\begin{bmatrix}
        1 & 1 & 1 & 0 & 0 \\\\
        1 & 1 & 1 & 0 & 0 \\\\
        1 & 1 & 1 & 0 & 0 \\\\
        0 & 0 & 0 & 1 & 1 \\\\
        0 & 0 & 0 & 1 & 1 \\end{bmatrix}`;
    katex.render(adjacencyMatrix, document.getElementById('adjacency-matrix'));

    const featureVector = `\\vec{f} = \\begin{bmatrix}
        1 \\\\ 1 \\\\ 1 \\\\ 0 \\\\ 0 \\\\ 0
        \\end{bmatrix}`;
    katex.render(featureVector, document.getElementById('feature-vector'));

    const gaussianKernel = `\\omega_{ij} = exp(
            \\frac {\\left \\| x_{i} - x_{j} \\right \\|^{2}}
            {2\\sigma^{2}})`;
    katex.render(gaussianKernel, document.getElementById('gaussian-kernel'));

    const relationship = `R = \\sum \\omega_{i, j} (f_{i} - f_{j})^{2}`;
    katex.render(relationship, document.getElementById('relationship'));

    const argminRelationship = `\\mathbf{argmin} \\space \\sum \\omega_{i, j} (f_{i} - f_{j})^{2}
        \\space \\space \\space w.r.t \\space \\space \\vec{f}`;
    katex.render(argminRelationship, document.getElementById('argmin-relationship'));

})();
