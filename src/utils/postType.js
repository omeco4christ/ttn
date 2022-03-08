class PostType {
  constructor() {
    this.types = {
      question: 'Ask Question',
      share_link: 'Share a link',
      forum_post: 'Post to Forum',
    };
  }

  getType(type) {
    return this.types[type];
  }

  keysArray() {
    return Object.keys(this.types);
  }

  questionType() {
    return {key: this.keysArray()[0], value: this.types[this.keysArray()[0]]};
  }

  shareLinkType() {
    return {key: this.keysArray()[1], value: this.types[this.keysArray()[1]]};
  }

  forumType() {
    return {key: this.keysArray()[2], value: this.types[this.keysArray()[2]]};
  }
}

const postType = new PostType();

export default postType;
