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
        
        $("p").remove();
        if(sum < 6) {
            $(".answer").append('<p>Увы! Вы не знаток психологии! Вы неважно знаете людей, поэтому вас настигает разочарование и Вы бываете одиноки. И вам кажется, что Вы не встретите своего человека и у вас не будет друга. Но не надо расстраиваться, читайте психологическую литературу о взаимоотношениях людей. Чаще анализируйте свои промахи и Вы поймёте свои неудачи, которые совершаете в отношении с людьми. Пытайтесь найти контакт, хотя бы дружеский.</p>');
        }
        else{
            $(".answer").append('<p>У вас врождённый талант психолога. Вы с лёгкостью можете найти друзей, а так же вас обожают люди противоположного пола. А ещё Вы свободно можете добиться у руководителя, решения вопроса в вашу пользу. Никаких трудностей в общении у вас нет. Вот поэтому Вы всегда находитесь в обществе приятных людей.</p>');
        }
    });
});