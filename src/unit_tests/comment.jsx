import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow, mount, render } from 'enzyme';
//import sinon from 'sinon';
import Comments from '../client/app/Comments/Comments';
import CommentsStore from '../client/app/Comments/_store';
import CommentsAction from '../client/app/Comments/_actions';

describe("Comments", () => {

  describe("Tests Functions", () => {
    describe("Store", () => {
      it("can add a comment", () => {
        expect(CommentsStore.comments.length).toBe(0);
        CommentsStore.addComment("Test");
        expect(CommentsStore.comments.length).toBe(1);
        expect(CommentsStore.comments[0]).toBe("Test");
        //clear comments
        CommentsStore.comments = [];
        CommentsStore.trigger(CommentsStore.comments);
        expect(CommentsStore.comments.length).toBe(0);
      });
    });
  });

  describe("Tests HTML", () => {
    const wrapper = mount(<Comments />);
    describe("Form renderings", () => {
      it("renders the form", () => {
        expect(wrapper.find('form').length).toBe(1);
      });
      it("renders input box", () => {
        expect(wrapper.find('input[type="text"]').length).toBe(1);
      });
      it("renders submit button", () => {
        expect(wrapper.find('input[type="submit"]').length).toBe(1);
      });
    });
    describe("Comment creation by form", () => {
      let comment = "Test";

      it("makes a comment", () => {
        expect(wrapper.find(".comment").length).toBe(0);
        wrapper.find('input[type="text"]').get(0).value = comment;
        wrapper.find('input[type="text"]').first().simulate("change");
        wrapper.find('input[type="submit"]').simulate("submit", {target: wrapper.find('input[type="sumbit"]').get(0)});
        jest.runAllTimers();
        //console.log(wrapper.find(".comments").children().length);
        expect(wrapper.find(".comment").length).toBe(1);
        expect(wrapper.find(".comment > span").text()).toBe(`Comment: ${comment}`);

        //one way to define comments
        //let comments = TestUtils.renderIntoDocument(
    //      <Comments />
        //);
        //let node = ReactDOM.findDOMNode(comments);

        //another way to define comments
        //let node = document.createElement('div');
        //let comments = ReactDOM.render(<Comments />, node);

        //the other way to write the test
        // expect(node.querySelector(".comments").childElementCount).toBe(0);
        // node.querySelector('input[type="text"]').value = comment;
        // TestUtils.Simulate.change(node.querySelector('input[type="text"]'));
        // TestUtils.Simulate.submit(node.querySelector('input[type="submit"]'));
        // jest.runAllTimers();
        // expect(node.querySelector(".comments").childElementCount).toBe(1);
      });
      it("has a like component", () => {
        expect(wrapper.find(".like").length).toBe(1);
      });
      it("can like the component", () => {
        wrapper.find('.liker button').first().simulate("click");
        expect(wrapper.find('.like .count').text()).toBe("Likes: 1");
      });
      it("can dislike the component", () => {
        wrapper.find('.liker button').at(1).simulate("click");
        expect(wrapper.find('.like .count').text()).toBe("Likes: 0");
      });
    });
  });
});
