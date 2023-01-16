import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ForumNav } from "../Forum_nav";
import { Forums } from "../Forums.js";
import { ForumBox } from "../Forum_box.js";
import { ForumVoting } from "../Forum_voting.js";

test("Title, Posts button, Add Forum button & Search bar are on screen", () => {
  const currentUserDetails = { id: 1 };
  render(<ForumNav currentUserDetails={currentUserDetails} />);
  const postsTitle = screen.getByRole("heading", {
    name: /posts/i,
  });
  const addForumPost = screen.getByRole("heading", {
    name: /add forum post \+/i,
  });

  const searchBar = screen.getByRole("textbox", {
    name: /search for a post\.\./i,
  });

  const title = screen.getByRole("heading", {
    name: /forums/i,
  });

  expect(postsTitle).toBeInTheDocument();
  expect(addForumPost).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("ForumBox renders correctly", () => {
  const currentUserDetails = 3;
  const item = {
    id: 1,
    username: "test_username",
    user_id: 2,
    date_created: "Sun, 15 Jan 2023 16:07:22 GMT",
    title: "test_title",
    description: "this_is_a_test",
    comment: 4,
  };
  const votes = [{ id: 1, likes: 3, dislikes: 5 }];
  const allComments = [
    { post_id: 1, comment: "hello" },
    { post_id: 1, comment: "test" },
  ];
  const handleVote = jest.fn();
  const fetchComments = jest.fn();
  const fetchForumData = jest.fn();

  render(
    <ForumBox
      currentUserDetails={currentUserDetails}
      key={item.id}
      username={item.username}
      user_id={item.user_id}
      date={item.date_created}
      Title={item.title}
      description={item.description}
      upvotes={votes[0].likes}
      downvotes={votes[0].dislikes}
      post_id={item.id}
      votes={votes}
      setVotes={jest.fn()}
      handleVote={handleVote}
      commentCount={item.comment}
      commentsForIndivPost={allComments.filter((el) => el.post_id === item.id)}
      fetchComments={fetchComments}
      fetchForumData={fetchForumData}
    />
  );
  const title = screen.getByText("test_title");
  const description = screen.getByText("this_is_a_test");
  const date = screen.getByText("Sun, 15 Jan 2023 16:07:22 GMT");
  const username = screen.getByText("test_username");
  const comments = screen.getByText("Comments4");
  const upvotes = screen.getByText("Upvotes:3");
  const downvotes = screen.getByText("Downvotes:5");

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(date).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(comments).toBeInTheDocument();
  expect(upvotes).toBeInTheDocument();
  expect(downvotes).toBeInTheDocument();
});

test("When upvote button is clicked, handlevote function is called", () => {
  const post_id = 2;
  const handleVote = jest.fn();

  render(<ForumVoting post_id={post_id} handleVote={handleVote} />);

  const upVote = screen.getByTestId("upvote");

  userEvent.click(upVote);
  expect(handleVote).toHaveBeenCalled();
  expect(handleVote).toHaveBeenCalledWith("upvote", post_id);
});

test("When downvote button is clicked, handlevote function is called", () => {
  const post_id = 2;
  const handleVote = jest.fn();

  render(<ForumVoting post_id={post_id} handleVote={handleVote} />);

  const downVote = screen.getByTestId("downvote");

  userEvent.click(downVote);
  expect(handleVote).toHaveBeenCalled();
  expect(handleVote).toHaveBeenCalledWith("downvote", post_id);
});

test("when post is clicked, fullpost modal displays", () => {
  const currentUserDetails = 3;
  const item = {
    id: 1,
    username: "test_username",
    user_id: 2,
    date_created: "Sun, 15 Jan 2023 16:07:22 GMT",
    title: "test_title",
    description: "this_is_a_test",
    comment: 4,
  };
  const votes = [{ id: 1, likes: 3, dislikes: 5 }];
  const allComments = [
    { post_id: 1, comment: "hello" },
    { post_id: 1, comment: "test" },
  ];
  const handleVote = jest.fn();
  const fetchComments = jest.fn();
  const fetchForumData = jest.fn();

  render(
    <ForumBox
      currentUserDetails={currentUserDetails}
      key={item.id}
      username={item.username}
      user_id={item.user_id}
      date={item.date_created}
      Title={item.title}
      description={item.description}
      upvotes={votes[0].likes}
      downvotes={votes[0].dislikes}
      post_id={item.id}
      votes={votes}
      setVotes={jest.fn()}
      handleVote={handleVote}
      commentCount={item.comment}
      commentsForIndivPost={allComments.filter((el) => el.post_id === item.id)}
      fetchComments={fetchComments}
      fetchForumData={fetchForumData}
    />
  );
  const setShow = jest.fn();
  const fullPostButton = screen.getByTestId("click-full-post");

  userEvent.click(fullPostButton);

  expect(screen.getByTestId("full-post-modal")).toBeInTheDocument();
});
