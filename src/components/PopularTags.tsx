import { useState, useEffect } from 'react';
import api from '../services/api';

interface PopularTagsProps {
    onTagSelect: (tag: string) => void;
}

export default function PopularTags({ onTagSelect }: PopularTagsProps): JSX.Element {
  const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        fetchTags();
    }, []);

    /**
     * fetchTags - Fetches the popular tags from the API and updates the state.
    */
    const fetchTags = async () => {
        try {
            const response = await api.get<{ tags: string[] }>('/tags');
            setTags(response.data.tags);
        } catch (error) {
            console.error('Error fetching tags:', error);
        }
    };

    return (
        <div className="sidebar">
            <p>Popular Tags</p>
            <div className="tag-list">
                {/*Render each tag as a <a> element*/}
                {tags.map(tag => (
                    <a
                        key={tag}
                        href=""
                        className="tag-pill tag-default"
                        onClick={(e) => {
                            e.preventDefault();
                            onTagSelect(tag);
                        }}
                    >
                        {/*Then show the next tag*/}
                        {tag}
                    </a>
                ))}
            </div>
        </div>
    );
}