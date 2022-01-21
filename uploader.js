window.onload = function() {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('submitButton').addEventListener('click', onClick);
    $('#imageForm').submit((event) => {
        event.preventDefault();
        const $form = $('#imageForm')
        const formData = new FormData($form.get()[0]);
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            dataType: 'json',
            processData: false,
            contentType: false,
            data: formData,
        }).done((data) => {
            document.getElementById('spinner').style.display = 'none';
            console.log(data);
            if (data == null) {
                document.getElementById('error').style.display = 'block';
                document.getElementById('success').style.display = 'none';
            } else {
                //const text = `正常な画像です。スコア:${data.result.score} / カテゴリー:${data.result.name}`;
                const text = `スコア:${data.result.score} / カテゴリー:${data.result.name}`;
                //const text = `カテゴリー:${data.result.name} / スコア:${data.result.score}`;
                document.getElementById('success').style.display = 'block';
                document.getElementById('success').innerText = text;
                document.getElementById('error').style.display = 'none';
            }
        }).fail((data) => {
        });
    });
}

function onClick() {
    document.getElementById('spinner').style.display = 'block';
}

//addition
//$('image').on('chenge', function(e) {
//    var reader = new FileReader();
//    reader.onload = function(e){
//        $("#preview").attr('src', e.target.result);
//    }
//    reader.readAsDataURL(e.target.file[0]);
//});
//function OnFileSelect( inputElement )
//{
//    // ファイルリストを取得
//    var fileList = inputElement.files;
//    // ファイルの数を取得
//    var fileCount = fileList.length;
//    var loadCompleteCount = 0;
//    var imageList = "";
//    // 選択されたファイルの数だけ処理する
//    for ( var i = 0; i < fileCount; i++ ) {
//        // FileReaderを生成
//        var fileReader = new FileReader();
//        // ファイルを取得
//        var file = fileList[ i ];
//        // 読み込み完了時の処理を追加
//        fileReader.onload = function() {
//            // <li>,<img>タグの生成
//            imageList += "<li><img src=¥"" + this.result + "¥" /></li>¥r¥n";
//            // 選択されたファイルすべの処理が完了したら、<ul>タグに流し込む
//            if ( ++loadCompleteCount == fileCount ) {
//            // <ul>タグに<li>,<img>を流し込む
//                document.getElementById( "ID001" ).innerHTML = imageList;
//            }
//        };
//        // ファイルの読み込み(Data URI Schemeの取得)
//        fileReader.readAsDataURL( file );
//    }
//}
