$(document).ready(function () {
    $('.prevalent-table').DataTable({
        columnDefs: [
            { targets: 0, orderable: false }
        ],
        paging: false,
        searching: false,
        info: false,
        ordering: true,
        responsive: true
    });

    $('.sortable-table').DataTable({
        order: [],
        paging: false,
        searching: false,
        info: false,
        ordering: true,
        responsive: true
    });
});