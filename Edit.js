import {Selector} from 'testcafe';

fixture `Getting Started`
    .page `https://gist.github.com/AriBasyari13/1e3176f21339dd5a8b2c149d90a5517d`;

test('Edit Gist', async t =>{
    
    await t 
        .click('css=.octicon-pencil')
        .typeText('css=.file-editor-textarea', "import {Selector} from 'testcafe';\nfixture `Getting Started`\n    .page `https://gist.github.com/discover`;")
        .click('css=.btn-primary')
        .takeScreenshot('my-fixture/CaptureSucces.jpg')
});
