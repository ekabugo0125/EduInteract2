import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

//or () =>{}
describe('Our first test',function(){

    it('should pass',function(){

        expect(true).to.equal(true);
    });

});

describe('index.html',function(){

it('should say hello emmanuel', function(done){

    const index = fs.readdirSync('./src/index.html',"utf-8");
    
    jsdom.env(index,function(err,window){
       const h1 = window.document.getElementsByTagName('h1')[0];
       expect(h1.innerhtml).to.equal("Hello Emmanuel Kabugo");
       done();
       window.close();
    })

})

});