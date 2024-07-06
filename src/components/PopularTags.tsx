export default function PopularTags(): JSX.Element {
    const tags = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS', 'HTML']; // Array of temporary tags I'm using just to get the idea of UI
  
    return (
      <div className="popular-tags">
        <h2>Popular Tags</h2>
        <div className="tag-list">
          {/*iterate over the tags array and adds a span elememt for each tag*/}
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };