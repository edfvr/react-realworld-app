// src/components/ArticlePage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { Article } from '../interfaces/Article'

const ArticlePage: React.FC = () => {
    const [article, setArticle] = useState<Article | null>(null);
    const [isAuthor, setIsAuthor] = useState(false); // To-do: implement logic to determine if the current user is the author
    const { slug } = useParams<{ slug: string }>();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await api.get<{ article: Article }>(`/articles/${slug}`);
                setArticle(response.data.article);
                // determine if the current user is the author
                // setIsAuthor(currentUser.username === response.data.article.author.username);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [slug]);

    if (!article) {
        return <div>Loading...</div>;
    }

    const handleFollow = () => {
        // Implement follow functionality
    };

    const handleFavorite = () => {
        // Implement favorite functionality
    };

    const handleEdit = () => {
        // Implement edit functionality
    };

    const handleDelete = () => {
        // Implement delete functionality
    };

    return (
        <div className="article-page">
            <div className="banner">
                <div className="container">
                    <h1>{article.title}</h1>
                    <div className="article-meta">
                        <Link to={`/profile/${article.author.username}`}>
                            <img src={article.author.image} alt={article.author.username} />
                        </Link>
                        <div className="info">
                            <Link to={`/profile/${article.author.username}`} className="author">{article.author.username}</Link>
                            <span className="date">{new Date(article.createdAt).toDateString()}</span>
                        </div>
                        {isAuthor ? (
                            <>
                                <Link to={`/editor/${article.slug}`} className="btn btn-outline-secondary btn-sm">
                                    <i className="ion-edit"></i> Edit Article
                                </Link>
                                <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
                                    <i className="ion-trash-a"></i> Delete Article
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-sm btn-outline-secondary" onClick={handleFollow}>
                                    <i className="ion-plus-round"></i>
                                    &nbsp; Follow {article.author.username}
                                </button>
                                &nbsp;&nbsp;
                                <button className={`btn btn-sm btn-outline-primary ${article.favorited ? 'active' : ''}`} onClick={handleFavorite}>
                                    <i className="ion-heart"></i>
                                    &nbsp; Favorite Post <span className="counter">({article.favoritesCount})</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <p>{article.body}</p>
                    </div>
                </div>

                <ul className="tag-list">
                    {article.tagList.map(tag => (
                        <li key={tag} className="tag-default tag-pill tag-outline">
                            {tag}
                        </li>
                    ))}
                </ul>

                <hr />

                <div className="article-actions">
                    <div className="article-meta">
                        <Link to={`/profile/${article.author.username}`}>
                            <img src={article.author.image} alt={article.author.username} />
                        </Link>
                        <div className="info">
                            <Link to={`/profile/${article.author.username}`} className="author">{article.author.username}</Link>
                            <span className="date">{new Date(article.createdAt).toDateString()}</span>
                        </div>
                        {isAuthor ? (
                            <>
                                <Link to={`/editor/${article.slug}`} className="btn btn-outline-secondary btn-sm">
                                    <i className="ion-edit"></i> Edit Article
                                </Link>
                                <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
                                    <i className="ion-trash-a"></i> Delete Article
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-sm btn-outline-secondary" onClick={handleFollow}>
                                    <i className="ion-plus-round"></i>
                                    &nbsp; Follow {article.author.username}
                                </button>
                                &nbsp;&nbsp;
                                <button className={`btn btn-sm btn-outline-primary ${article.favorited ? 'active' : ''}`} onClick={handleFavorite}>
                                    <i className="ion-heart"></i>
                                    &nbsp; Favorite Post <span className="counter">({article.favoritesCount})</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <p>
                            <Link to="/login">Sign in</Link> or <Link to="/register">sign up</Link> to add comments on this article.
                        </p>
                        {/* Comments would go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;