import React from "react";

// components
import SearcBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Comments from "./Comments";

// API
import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    comments: [],
  };

  componentDidMount() {
    this.onTermSubmit("Java");
  }
  // handles search term
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        q: term,
      },
    });
    // destructure response
    const { items } = response.data;

    this.setState({
      videos: items,
      selectedVideo: items[0],
    });

    if (this.state.videos[0].id.videoId) {
      this.getComments(this.state.videos[0].id.videoId);
    }
  };

  getComments = async (id) => {
    const response = await youtube.get("/commentThreads", {
      params: {
        part: "snippet",
        type: "string",
        videoId: id,
      },
    });
    // destructure response
    const { items } = response.data;
    console.log(items);

    this.setState({
      comments: items,
    });
  };

  onVideoSelect = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
    this.getComments(video.id.videoId);
  };

  render() {
    return (
      <div className="ui container">
        <SearcBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
              <Comments comments={this.state.comments} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
