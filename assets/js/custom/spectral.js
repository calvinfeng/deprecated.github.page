"use strict";

// Author(s): Calvin J. Feng

(function() {
    /* global katex */
    const NJW = `\\mathbf{argmin}\\space f^{T}D^{-\\frac{1}{2}}WD^{-\\frac{1}{2}}f`;
    katex.render(NJW, document.getElementById('ng-jordan-weiss'));

    const SymMatrixDerivative = `\\frac{\\partial}{\\partial\\vec{x}}
        (\\space x^{T}A\\space x) = 2A\\vec{x}`;
    katex.render(SymMatrixDerivative, document.getElementById('sym-matrix-derivative'));

    const matrixDerivative = `\\frac{\\partial}{\\partial\\vec{x}}
        (\\space x^{T}A\\space x) = (A + A^{T})\\vec{x}`;
    katex.render(matrixDerivative, document.getElementById('matrix-derivative'));

    const symmetricMatrix = `A = A^{T}`;
    katex.render(symmetricMatrix, document.getElementById('symmetric-matrix'));

    const constraintDefinition = `g(x, y, z) = k`;
    katex.render(constraintDefinition, document.getElementById('constraint-definition'));

    const lagrangianDefinition = `L = f(x, y, z) - \\lambda (g(x, y, z) - k)`;
    katex.render(lagrangianDefinition, document.getElementById("lagrangian-definition"));

    const lagrangianGradient = `\\Delta L = 0 \\space:\\space \\Delta_{x, y, z, \\lambda} L(x, y, z, \\lambda) = 0`;
    katex.render(lagrangianGradient, document.getElementById("lagrangian-gradient"));

    const aVector = `x^{T}A\\space x`;
    katex.render(aVector, document.getElementById("a-vector"));

    const lx1 = `L_{x} = 2A\\vec{x} - \\lambda 2\\vec{x} = 0`;
    katex.render(lx1, document.getElementById("l-x-1"));

    const lx2 = `A\\vec{x} = \\lambda\\vec{x}`;
    katex.render(lx2, document.getElementById("l-x-2"));

    const lLambda = `L_{\\lambda} = C - \\vec{x}^{T}\\vec{x} = 0`;
    katex.render(lLambda, document.getElementById("l-lambda"));

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

    const vertexDegree = `d_{i} = \\sum^{N}_{j = 1} w_{ij}`;
    katex.render(vertexDegree, document.getElementById('vertex-degree'));

    const degreeMatrix=`D = \\begin{bmatrix}
        d_{1} & 0 & 0 & 0 & ... \\\\
        0 & d_{2} & 0 & 0 & ... \\\\
        0 & 0 & d_{3} & 0 & ... \\\\
        0 & 0 & 0 & d_{4} & ... \\\\
        ... & ... & ... & ... & ...\\end{bmatrix}`;
    katex.render(degreeMatrix, document.getElementById('degree-matrix'));

    const featureVector = `\\vec{f} = \\begin{bmatrix}
        1 \\\\ 1 \\\\ 1 \\\\ 0 \\\\ 0
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

    const expandedRelationship = `\\sum_{ij} w_{ij}(f_{i}^{2} - 2f_{i}f_{j} + f_{j}^{2})
        = \\sum_{ij}w_{ij}f_{i}^{2} - 2\\sum_{ij}w_{ij}f_{i}f_{j} + \\sum_{ij}w_{ij}f_{j}^{2}`;
    katex.render(expandedRelationship, document.getElementById('expanded-relationship'));

    const fDf = `\\sum_{ij}w_{ij}f_{i}^{2} = \\sum_{ij}w_{ij}f_{j}^{2} = \\sum_{i} (w_{i,1} + w_{i,2} + ...) f_{i}^{2}
        = \\sum_{i} d_{i}f_{i}^{2} = \\vec{f^{T}} D \\vec{f}`;
    katex.render(fDf, document.getElementById('f-d-f'));

    const fWf = `\\sum_{i}\\sum_{j}w_{ij}f_{i}f_{j} = \\sum_{i}f_{i}\\sum_{j}w_{ij}f_{j}
        = \\sum_{i}f_{i}[w_{i1}, w_{i2}, w_{i3}, ...]\\vec{f}
        = f_{1}[w_{11}, w_{12}, w_{13}, ...]\\vec{f} + f_{2}[w_{21}, w_{22}, w_{23}, ...]\\vec{f} + ...`;
    katex.render(fWf, document.getElementById('f-w-f'));

    const fWfMatrix = `=\\begin{bmatrix}
        f_{1} & f_{2} & f_{3} & ...\\end{bmatrix}
        \\begin{bmatrix}
        w_{11} & w_{12} & w_{13} & ... \\\\
        w_{21} & w_{22} & w_{23} & ... \\\\
        w_{31} & w_{32} & w_{33} & ... \\\\
        ... & ... & ... & ...
        \\end{bmatrix}
        \\begin{bmatrix}
        f_{1} \\\\ f_{2} \\\\ f_{3} \\\\ ...
        \\end{bmatrix} = \\vec{f^{T}}W\\vec{f}`;
    katex.render(fWfMatrix, document.getElementById('f-w-f-matrix'));

    const derivedRelationship = `\\vec{f^{T}}D\\vec{f} - 2\\vec{f^{T}}W\\vec{f} + \\vec{f^{T}}D\\vec{f}
        = 2\\vec{f^{T}}(D - W)\\vec{f}`;
    katex.render(derivedRelationship, document.getElementById('derived-relationship'));

    const laplacian = `L = D - W`;
    katex.render(laplacian, document.getElementById('laplacian'));

    const laplacianObjective = `\\mathbf{argmin}\\space \\vec{f^{T}}L\\vec{f}`;
    katex.render(laplacianObjective, document.getElementById('laplacian-objective'));
})();
