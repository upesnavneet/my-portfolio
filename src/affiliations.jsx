import CardSwap, { Card } from './components/ui/CardSwap/CardSwap'

const Affiliations = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            backgroundColor: '#E8DBB3',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CardSwap
                width={600}
                height={500}
                cardDistance={60}
                verticalDistance={100}
                delay={5000}
                pauseOnHover
            >
                <Card style={{ background: '#000' }}>
                    <h3>Card 1</h3>
                    <p>Your content here</p>
                </Card>
                <Card style={{ background: '#000' }}>
                    <h3>Card 2</h3>
                    <p>Your content here</p>
                </Card>
                <Card style={{ background: '#000' }}>
                    <h3>Card 3</h3>
                    <p>Your content here</p>
                </Card>
            </CardSwap>
        </div>
    )
}

export default Affiliations
