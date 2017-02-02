(function() {
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
            \\frac
            {\\left \\| x_{i} - x_{j} \\right \\|^{2}}
            {2\\sigma^{2}}
        )`;
    katex.render(gaussianKernel, document.getElementById('gaussian-kernel'));

    const relationship = `R = \\sum \\omega_{i, j} (f_{i} - f_{j})^{2}`;
    katex.render(relationship, document.getElementById('relationship'));

    const argminRelationship = `argmin \\space \\sum \\omega_{i, j} (f_{i} - f_{j})^{2}
        \\space \\space \\space w.r.t \\space \\space \\vec{f}`;
    katex.render(argminRelationship, document.getElementById('argmin-relationship'));

})();
