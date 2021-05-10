import { Container } from './styles'

interface GridItemProps {
  item: {
    title: string
    date: string
    address: string
    thumb: string
    fullImage: string
  }
  index: number
}

function GridItem({ item, index }: GridItemProps): React.ReactElement {
  return (
    <Container
      href={`#preview-${index + 1}`}
      className={`grid__item pos-${index + 1}`}
      data-title={item.title}
    >
      <div
        className="grid__item-img"
        style={{ backgroundImage: `url("${item.thumb}")` }}
      ></div>
    </Container>
  )
}

export default GridItem
