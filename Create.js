import {Selector} from 'testcafe';

fixture `Getting Started`
    .page `https://gist.github.com/discover`;

test('Create Gist', async t =>{
    
    await t 
        .click('css=svg.octicon.octicon-plus')
        .typeText('name=gist[description]', 'qa-gist.md')
        .typeText('name=gist[contents][][name]', 'qa-gist.js')
        .typeText('name=gist[contents][][value]', "import {Selector} from 'testcafe';")
        .click('name=gist[public]')        
        .takeScreenshot('my-fixture/CaptureSucces.jpg')
});
