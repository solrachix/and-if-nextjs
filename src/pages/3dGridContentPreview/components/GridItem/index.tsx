import { forwardRef, useImperativeHandle, useRef } from 'react'
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

function GridItem({ item, index }: GridItemProps, ref): React.ReactElement {
  const gridRef = useRef()
  useImperativeHandle(ref, () => ({
    elem: gridRef,
    getAlert() {
      alert('getAlert from Child')
    }
  }))

  return (
    <Container
      ref={gridRef}
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

export default forwardRef(GridItem)
