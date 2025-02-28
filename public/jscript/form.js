 $(document).ready(function() {
    alert('Hola');

    // Load chapters on page load
    loadChapters();

    // Add Chapter Button Click
    $(document).on('click', '#addChapterBtn', function() {
       alert('Add Chapter');
        
        addChapter();
    });

    // Edit Chapter Button Click
    $("#editChapterBtn").click(function() {
        editChapter();
    });

    // Delete Chapter Button Click
    $(document).on('click', '.deleteChapterBtn', function() {
        deleteChapter($(this).data('id'));
    });


// Load Chapters from API
function loadChapters() {
    $.ajax({
        url: 'API/contenido.php',
        type: 'GET',
        success: function(data) {
            alert(data);
            $('#chapterTableBody').empty();
            $.each(data, function(index, chapter) {
                $('#chapterTableBody').append(`
                    <tr>
                        <td>${chapter.id_capitulo}</td>
                        <td>${chapter.imagePath}</td>
                        <td>${chapter.capitulo}</td>
                        <td>${chapter.tema}</td>
                        <td>${chapter.competencias}</td>
                        <td>${chapter.descripcion}</td>
                        <td>${chapter.minutos}</td>
                        <td>${chapter.gd}</td>
                        <td>${chapter.color}</td>
                        <td>${chapter.txtcolor}</td>
                        <td>${chapter.urlclase}</td>
                        <td>${chapter.urltest}</td>
                        <td>
                            <button type="button" class="btn btn-warning editChapterBtn" data-id="${chapter.id_capitulo}" data-toggle="modal" data-target="#editChapterModal">Edit</button>
                            <button type="button" class="btn btn-danger deleteChapterBtn" data-id="${chapter.id_capitulo}">Delete</button>
                        </td>
                    </tr>
                `);
            });
        },
        error: function(error) {
            console.error('Error loading chapters:', error);
        }
    });
}

// Add Chapter to API
function addChapter() {
    var formData = $('#addChapterForm').serialize();
    alert(formData);
    $.ajax({
        url: 'API/contenido.php',
        type: 'POST',
        data: formData,
        success: function(data) {
            $('#addChapterModal').modal('hide');
            $('#addChapterForm')[0].reset();
            loadChapters();
        },
        error: function(error) {
            console.log('Error');
        }
    });
}

// Edit Chapter in API
function editChapter() {
    var formData = $('#editChapterForm').serialize();
    $.ajax({
        url: 'contenido.php',
        type: 'PUT',
        data: formData,
        success: function(data) {
            $('#editChapterModal').modal('hide');
            loadChapters();
        },
        error: function(error) {
            console.error('Error editing chapter:', error);
        }
    });
}

// Delete Chapter from API
function deleteChapter(id) {
    if (confirm("Are you sure you want to delete this chapter?")) {
        $.ajax({
            url: 'contenido.php',
            type: 'DELETE',
            data: { id_capitulo: id },
            success: function(data) {
                loadChapters();
            },
            error: function(error) {
                console.error('Error deleting chapter:', error);
            }
        });
    }
}

// Populate Edit Chapter Modal
$(document).on('click', '.editChapterBtn', function() {
    var id = $(this).data('id');
    $.ajax({
        url: 'contenido.php',
        type: 'GET',
        data: { id_capitulo: id },
        success: function(data) {
            $('#editChapterId').val(data.id_capitulo);
            $('#editImagePath').val(data.imagePath);
            $('#editCapitulo').val(data.capitulo);
            $('#editTema').val(data.tema);
            $('#editCompetencias').val(data.competencias);
            $('#editDescripcion').val(data.descripcion);
            $('#editMinutos').val(data.minutos);
            $('#editGd').val(data.gd);
            $('#editColor').val(data.color);
            $('#editTxtcolor').val(data.txtcolor);
            $('#editUrlclase').val(data.urlclase);
            $('#editUrltest').val(data.urltest);
        },
        error: function(error) {
            console.error('Error loading chapter data:', error);
        }
    });
}); 

});