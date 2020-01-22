import React from 'react';
import axe from 'axe-core';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import Article from '../src/client/components/Article.jsx';
import { mountToDoc } from './test-helpers';

configure({ adapter: new Adapter() });

describe('Article component testing', () => {
    const dummyArticle = {
        Title: 'This is a test title',
        SnippetText: 'Some snippet text',
        Copy: 'Some copy text',
        Image: {
            'small-phone': 'small-phone',
            'medium-phone': 'medium-phone',
            tablet: 'tablet',
            desktop: 'desktop',
        },
        Author: {
            Name: 'Test Author',
            JobTitle: 'Job Title',
        },
    };

    it('renders article data correctly', (done) => {
        const wrapper = shallow(<Article article={dummyArticle} />);

        expect(wrapper.find('div .card__title').html()).to.contain(dummyArticle.Title);
        expect(wrapper.find('div .card__image').html()).to.contain(dummyArticle.Image['small-phone']);
        expect(wrapper.find('div .card__image').html()).to.contain(dummyArticle.Image['medium-phone']);
        expect(wrapper.find('div .card__image').html()).to.contain(dummyArticle.Image.tablet);
        expect(wrapper.find('div .card__image').html()).to.contain(dummyArticle.Image.desktop);
        expect(wrapper.find('p .card__title--author').html()).to.contain(dummyArticle.Author.Name);
        expect(wrapper.find('p .card__title--author').html()).to.contain(dummyArticle.Author.JobTitle);
        expect(wrapper.find('span .card__text--snippet').html()).to.contain(dummyArticle.SnippetText);
        expect(wrapper.find('p .card__text').html()).to.contain(dummyArticle.Copy);
        done();
    });

    it('accessibility', (done) => {
        const wrapper = mountToDoc(React.createElement(Article, { article: dummyArticle }));
        const nodeArticle = wrapper.getDOMNode();

        axe.run(nodeArticle, {}, (err, { violations }) => {
            console.log('err, violations', err, violations);
            expect(err).to.equal(null);
            expect(violations.length).to.equal(0);
            done();
        });
    });
});
