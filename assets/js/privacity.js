document.addEventListener('DOMContentLoaded', function () {
    const selectorBody = document.querySelector('body');
    const warningModal = `
        <div class="cc-container-warning-modal">
            <div class="cc-container-modal">
                <div class="cc-modal-header">
                    <h3>Aviso</h3>
                </div>
                <div class="cc-modal-body">
                    <p>Esta página web es ficticia y ha sido creada exclusivamente para una actividad estudiantil. CORTO CIRCUITO no es una empresa real y cualquier información proporcionada aquí es únicamente con fines educativos.</p>
                </div>
                <div class="cc-modal-footer">
                    <button class="btn-action">ACEPTAR</button>
                </div>
            </div>
        </div>
    `;

    selectorBody.classList.add('privacity');
    selectorBody.insertAdjacentHTML('beforeend', warningModal);

    document.querySelector('.cc-container-warning-modal .btn-action').addEventListener('click', function () {
        document.querySelector('body').classList.remove('privacity');
        document.querySelector('.cc-container-warning-modal').remove();
    });
});
