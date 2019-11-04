import React from 'react';
import Markdown from 'react-markdown';
import classnames from 'classnames';
import visit from 'unist-util-visit';
import typography from '../../css/typography.css';
import styles from './Content.css';
import { BlockQuote, LargeParagraph } from '../Typography';

const getHeadingClass = level => {
  return [typography.ben, typography.samson, typography.beau, typography.harvey][level - 1];
};

const stripImageParagraphPlugin = tree => {
  visit(tree, 'paragraph', (node, index, parent) => {
    if (node.children && node.children[0].type === 'image') {
      /* eslint no-param-reassign: 0 */
      parent.children[index] = node.children[0];
    }
  });

  return tree;
};

const defaultRenderers = {
  heading: args =>
    React.createElement(
      `h${args.level}`,
      {
        className: classnames(typography.margins, getHeadingClass(args.level)),
      },
      args.children,
    ),
  paragraph: args => <LargeParagraph>{args.children}</LargeParagraph>,
  listItem: args => <li className={classnames(typography.bottomMargin, typography.hattie)}>{args.children}</li>,
  list: args =>
    React.createElement(
      args.ordered ? 'ol' : 'ul',
      {
        className: classnames(styles.list, args.ordered ? styles.ol : styles.ul),
      },
      args.children,
    ),
  blockquote: args => <BlockQuote>{args.children}</BlockQuote>,
  image: args => <img className={classnames(typography.bottomMargin, styles.image)} src={args.src} alt={args.alt} />,
  link: args => {
    const newTab = args.href.indexOf('http') !== -1;
    return (
      <a href={args.href} target={newTab ? '_blank' : '_self'}>
        {args.children}
      </a>
    );
  },
};

const Content = ({ className, markdown, renderers, noRenderers, justifyText }) => (
  <Markdown
    className={classnames(styles.content, styles[justifyText], className)}
    source={markdown}
    renderers={noRenderers ? undefined : renderers}
    astPlugins={[stripImageParagraphPlugin]}
  />
);

Content.defaultProps = {
  className: null,
  justifyText: 'left',
  noRenderers: false,
  renderers: defaultRenderers,
};

export default Content;
