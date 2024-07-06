import Banner from '../components/Banner';
import Post from '../components/Post'
import PopularTags from '../components/PopularTags';

export default function(): JSX.Element {
    return (
        <div>
            <Banner />

            <div className="container page">
              <div className="row">
                <div className="col-md-9">
                  <div className="feed-toggle">
                    <ul className='nav nav-pills outline-active'>
                      <li className="nav-item" style={{ display: 'none' }}>
                        <a href="#" className="nav-link">
                          Your Feed
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link active">
                          Global Feed
                        </a>
                      </li>
                      <li className="nav-item" style={{ display: 'none' }}>
                        <a href="#" className="nav-link active">
                          <i className="ion-pound"></i>
                        </a>
                      </li>
                    </ul>
                    <section className="global-feed ng-isolate-scope">
                      <Post
                        name="John Doe"
                        profilePic="https://randomuser.me/api/portraits/men/1.jpg"
                        date="July 5, 2024"
                        content="This is the first post content. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        likes={15}
                      />
                      <Post
                        name="Jane Smith"
                        profilePic="https://randomuser.me/api/portraits/women/2.jpg"
                        date="July 6, 2024"
                        content="This is the second post content. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                        likes={20}
                      />
                    </section>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sidebar">
                    <PopularTags />
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};