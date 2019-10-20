import * as React from 'react'

interface IProps{
    name: string
}

interface IState {
    value: number
}


class App extends React.Component<IProps, IState>{
    public constructor(props: IProps) {
        super(props)
        this.state = {
            value: 10
        }
    }
    render(){
        const {name} = this.props
        const {value} = this.state
        return (
            <>
                <div>hello typescript {name} {value}</div>
                <input type="text" value={this.state.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    this.setState( {
                        value: +e.target.value
                    })
                }} />
                <button onClick={(e: React.MouseEvent<HTMLButtonElement>)=> {
                    this.setState({
                        value: this.state.value + 1
                    })
                }}>add</button>
            </>
        )
    }

    public componentDidMount(){
        console.log('hello')
    }
}

export default App