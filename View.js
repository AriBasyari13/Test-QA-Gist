import {Selector} from 'testcafe';

fixture `Getting Started`
    .page `https://gist.github.com/discover`;

test('Create Gist', async t =>{
    
    await t 
        .click('css=svg.octicon.octicon-plus')
        .click('linkText=See all of your gists')
        .takeScreenshot('my-fixture/CaptureSucces.jpg')
});
