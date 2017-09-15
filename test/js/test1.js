$(document).ready(function(){
    $(".subm").on('click', function(){
        var sum;
        sum =+$("input[name='score1']:checked").val();
        sum +=+$("input[name='score3']:checked").val();
        sum +=+$("input[name='score4']:checked").val();
        sum +=+$("input[name='score5']:checked").val();
        sum +=+$("input[name='score2']:checked").val();
        sum +=+$("input[name='score6']:checked").val();
        sum +=+$("input[name='score7']:checked").val();
        sum +=+$("input[name='score8']:checked").val();
        sum +=+$("input[name='score9']:checked").val();
        sum +=+$("input[name='score10']:checked").val();
        sum +=+$("input[name='score11']:checked").val();
        sum +=+$("input[name='score12']:checked").val();
        sum +=+$("input[name='score13']:checked").val();
        sum +=+$("input[name='score14']:checked").val();
        $("p").remove();
        if(sum < 11) {
            $(".answer").append('<p>Вы совершенно не держите обид. Какие то споры не выведут вас из себя. Кто-то может посчитать вас равнодушным. Не заостряйте ваше внимание, может быть это зависть.</p>');
        }
        else if(sum < 20){
            $(".answer").append('<p>В вас присутствует обида, поэтому бывают проблемы не только лично у вас, но и с другими людьми. С легкостью выходя из себя, поэтому часто возникает недопонимание с родными и сослуживцами. Не надо вспыхивать из-за ерунды, нервы ваши дороже, да и чужие тоже.</p>')
        }
        else{
            $(".answer").append('<p>Вы крайне обидчивы, можете мстить , очень резко реагируете, как к вам относятся другие люди. Вам присуще очень частая смена настроения. Вам нужно расслабиться и не быть крайне обидчивым.</p>');
        }
    });
});