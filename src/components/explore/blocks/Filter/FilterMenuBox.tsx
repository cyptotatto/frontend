import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FilterMenuTitle from "../../atoms/Filter/FilterMenuTitle";
import Tag from "../../atoms/Filter/Tag";

interface IProps {
  title: string;
  tags?: string[];
}

function FilterMenuBox({ title, tags }: IProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState("전체");

  const onToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const onSelectTag = (name: string) => setSelectedTag(name);

  return (
    <MenuBox>
      <FilterMenuTitle isOpen={isMenuOpen} onToggleMenu={onToggleMenu}>
        {title}
      </FilterMenuTitle>
      {isMenuOpen && (
        <TagBox>
          {tags?.map((tag, i) => (
            <Tag
              key={i}
              isActive={selectedTag === tag}
              onSelectTag={onSelectTag}
            >
              {tag}
            </Tag>
          ))}
        </TagBox>
      )}
    </MenuBox>
  );
}

export default FilterMenuBox;

const MenuBox = styled.li`
  border-bottom: 1px solid #2e2e2e;
  &:last-child {
    border-bottom: none;
  }
`;

const TagBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 7px;
  padding: 10px 0 24px 0;
`;
