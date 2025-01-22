import { render } from '@testing-library/react'
import { OrderStatus } from './order-status'
describe('Order Status', () => {
  it('should display the right text bases on order status', () => {
    const wrapper = render(<OrderStatus status='pending'/>)
    const status = wrapper.getByText('Pendente')
    
    console.log(status.outerHTML)    

    expect(status).toBeInTheDocument()
  })
})