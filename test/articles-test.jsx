import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Articles from '../src/client/components/Articles.jsx';

configure({ adapter: new Adapter() });

describe('App component testing', () => {
    xit('renders welcome message', () => {
        // const fetchPromise = Promise.resolve({
        //     json: () => Promise.resolve({Rick: `I turned myself into a pickle, Morty!`}),
        // });
        const fetchPromise = Promise.reject();
        global.fetch = () => fetchPromise;

        const wrapper = shallow(<Articles />);
console.log('>>>', wrapper);
        // const welcome = <h1>Latest News Articles</h1>;
        // expect(wrapper.contains(welcome)).to.equal(true);
    });
});
