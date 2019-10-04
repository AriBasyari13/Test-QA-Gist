import {Selector} from 'testcafe';

fixture `Getting Started`
    .page `https://gist.github.com/AriBasyari13/1e3176f21339dd5a8b2c149d90a5517d`;

test('Delete Gist', async t =>{
    
    await t 
        .click('css=.btn-danger')
        .takeScreenshot('my-fixture/CaptureSucces.jpg')
});
