import React from 'react';
import Markdown from 'react-markdown';
import classnames from 'classnames';
import visit from 'unist-util-visit';
import styled from 'styled-components';
import styles from './Content.css';
import { BlockQuote, Heading, LargeParagraph, ListItem, OrderedList, SubHeading, UnorderedList } from '../Typography';

const stripImageParagraphPlugin = tree => {
  visit(tree, 'paragraph', (node, index, parent) => {
    if (node.children && node.children[0].type === 'image') {
      /* eslint no-param-reassign: 0 */
      parent.children[index] = node.children[0];
    }
  });

  return tree;
};

const Image = styled.img`
  display: block;
  width: 100%;
  margin: ${({ theme }) => theme.margin} 0;
`;

const defaultRenderers = {
  heading: ({ children, level }) => {
    const tag = `h${level}`;
    switch (level) {
      case 1:
      case 2:
        return <Heading as={tag}>{children}</Heading>;
      default:
        return <SubHeading as={tag}>{children}</SubHeading>;
    }
  },
  paragraph: args => <LargeParagraph>{args.children}</LargeParagraph>,
  listItem: ({ children }) => <ListItem>{children}</ListItem>,
  list: ({ children, ordered }) => {
    if (ordered) {
      return <OrderedList>{children}</OrderedList>;
    }
    return <UnorderedList>{children}</UnorderedList>;
  },
  blockquote: args => <BlockQuote>{args.children}</BlockQuote>,
  image: ({ alt, src }) => <Image src={src} alt={alt} />,
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
