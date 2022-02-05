import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface IMenuItem {
  label: string,
  description?: string,
  path: string,
  icon?: string,
  iconAlign?: 'left' | 'right'
}

interface IMenu {
  items: Array<IMenuItem>,
  mode?: 'single' | 'multi'
}

interface IWrapper {
  mode: string;
}

const Wrapper = styled.div<IWrapper>`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding-right: 10px;
  line-height: 2rem;
  width: 160px;
  border-left: ${props => props.mode === 'multi' ? '1px solid #e8e8e8' : 'none'}
`;

const CustomLink = styled(NavLink)`
  text-decoration: none;
  color: #454545;
  &.active {
    color: #3b5fc0
  }
`;

const MultiLink = styled(NavLink)`
  text-decoration: none;
  color: #454545;
  padding-left: 1rem;
  margin-bottom:2rem;
  line-height: 1rem;
  &.active {
    color: #3b5fc0;
    border-left: 2px solid #3b5fc0;
  }
`;

const MultiLinkLabel = styled.div`
  text-decoration: none;
`;

const MultiLinkDescription = styled.div`
  text-decoration: none;
  color: #6e6e6e;
  font-size: .8rem;
`;

const renderSingleItem = (item: IMenuItem) => {
  return <CustomLink to={item.path}>{item.label}</CustomLink>
}

const renderMultiItem = (item: IMenuItem) => {
  return <MultiLink to={item.path}>
    <MultiLinkLabel>{item.label}</MultiLinkLabel>
    <MultiLinkDescription>{item.description}</MultiLinkDescription>
  </MultiLink>
}

const VMenu = ({
  items,
  mode = 'single'
}: IMenu
) => {
  return (
    <div>
      <Wrapper className='vmenu' mode={mode}>
        {mode === 'single' && items.map(renderSingleItem)}
        {mode === 'multi' && items.map(renderMultiItem)}
      </Wrapper>
    </div>
  )
}

export default VMenu;