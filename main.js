$(document).ready(function() {

    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa1 = $('#tarefaAdicionar').val();
        const novoItem = $('<li>✔ </li>')
        $(`<a>${novaTarefa1} </a>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#tarefaAdicionar').val('')
        $('ul').on('click','li',function(){
            $(this).css('text-decoration', 'line-through');

        }) 
    })
