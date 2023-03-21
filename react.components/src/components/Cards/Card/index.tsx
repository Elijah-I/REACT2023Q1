import React from 'react';
import type { CardProps } from 'types/card.types';
import viewsImgSrc from '../../../assets/icons/views.svg';
import likesImgSrc from '../../../assets/icons/likes.svg';
import './index.scss';

class Card extends React.PureComponent<CardProps> {
  render() {
    return (
      <div className="card">
        <div className="card__img">
          <img src={this.props.info.picture} alt="preview" />
        </div>

        <div className="card__content">
          <div className="card__title">{this.props.info.title}</div>
          <div className="card__author">
            by: <b>{this.props.info.author}</b>
          </div>
          <div className="card__tags">
            {this.props.info.tags.map((tag, key) => (
              <b key={key}>{tag}</b>
            ))}
          </div>
        </div>

        <div className="card__pannel">
          <div className="card__info">
            <div className="card__likes">
              <img src={likesImgSrc} alt="like icon" />
              <i>{this.props.info.statistic.likes}</i>
            </div>
            <div className="card__views">
              <img src={viewsImgSrc} alt="view icon" />
              <i>{this.props.info.statistic.views}</i>
            </div>
          </div>
          <div className="card__favorite">
            <b className={this.props.info.statistic.isFavorite ? 'card__favorite-active' : ''}></b>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
