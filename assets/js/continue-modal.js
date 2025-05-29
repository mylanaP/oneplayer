const assignSessionBtn = document.querySelector('.assign-session-player-btn');
if (assignSessionBtn) {
    assignSessionBtn.addEventListener('click', function () {
        const newSessionModal = bootstrap.Modal.getInstance(document.getElementById('new-session-modal'));
        if (newSessionModal) newSessionModal.hide();

        const assignSessionPlayerModal = new bootstrap.Modal(document.getElementById('assign-session-player-modal'));
        assignSessionPlayerModal.show();
    });
}

const assignPhaseBtn = document.querySelector('.assign-phase-player-btn');
if (assignPhaseBtn) {
    assignPhaseBtn.addEventListener('click', function () {
        const newPhaseModal = bootstrap.Modal.getInstance(document.getElementById('new-phase-modal'));
        if (newPhaseModal) newPhaseModal.hide();

        const assignPhasePlayerModal = new bootstrap.Modal(document.getElementById('assign-phase-player-modal'));
        assignPhasePlayerModal.show();
    });
}

const assignSessionIndividualBtn = document.querySelector('.assign-session-individual-player-modal-btn');
if (assignSessionIndividualBtn) {
    assignSessionIndividualBtn.addEventListener('click', function () {
        const assignSessionModal = bootstrap.Modal.getInstance(document.getElementById('assign-session-player-modal'));
        if (assignSessionModal) assignSessionModal.hide();

        const assignSessionIndividualModal = new bootstrap.Modal(document.getElementById('assign-session-individual-player-modal'));
        assignSessionIndividualModal.show();
    });
}