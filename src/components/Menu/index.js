import React, { useState } from 'react';
import style from './style.module.scss';
import cx from 'classnames';
import PropTypes from "prop-types"

export default function Menu({ items, Logo }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleButton = () => {
    setIsOpen(!isOpen);
  };

  const onCloseMenu = () => {
    setIsOpen(false);
  };

  const renderMenu = () => {
    return items.map(({ title, items }) => {
      return (
        <div
          className={`${style.menuSections} ${
            isOpen ? style.visible : style.invisible
          }`}
          key={title}
        >
          <div className={style.title}>{title}</div>
          {items.map((item) => {
            return <div key={`${title}-${item}`} className={style.sectionItem}>{item}</div>;
          })}
        </div>
      );
    });
  };

  return (
    <div className={style.container}>
      <nav
        className={isOpen ? cx(style.container, style.open) : style.container}
      >
        <section className={style.header}>
          {isOpen ? <Logo className={style.logo} /> : ''}
          <div
            className={isOpen ? cx(style.navBt, style.open) : style.navBt}
            onClick={onToggleButton}
          >
            <div />
            <div />
            <div />
          </div>
        </section>
        <section>{renderMenu()}</section>
      </nav>
      <div
        className={`${style.background} ${
          isOpen ? style.visible : style.invisible
        }`}
        onClick={onCloseMenu}
      />
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  logo: PropTypes.string
}
