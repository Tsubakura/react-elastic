import React, { Component } from 'react'
import es from 'elasticsearch'
const client = new es.Client({
    host: 'http://192.168.0.117:9200' //<- Change URL 
})

const listIndexes = () => new Promise((resolve, reject) => setTimeout(async () => {
    try {
        resolve(await (await client.cat.indices({format: 'json'})))
    } catch (e) {
        reject(e)
    }
}, 5000))

class Databases extends Component {
    state = { 
        indexes: [],
        indexKeys: []
    }
    async componentDidMount() {
        try{
            const indexes = await listIndexes()
            this.setState((state => ({ ...state, indexes: [...state.indexes, ...indexes] })))
            this.state.indexes.length > 0 && this.setState((state => ({ ...state, indexKeys: [...state.indexKeys, ...Object.keys(indexes[0])] })))
            console.log(indexes)
        }
        catch (e) {
            console.error(e)
        }
    }
    render() { 
        return (
            <div>
                <header>
                    <table>
                        <thead>
                            <tr>
                                { (this.state.indexes.length > 0) && this.state.indexKeys.map((key, i) => (
                                    <th key={i}>{ key }</th>
                                )) }
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.indexes.map((index, i) => (
                                <tr key={ i }>
                                    { this.state.indexKeys.map(key => (<td key={ `${i}${key}` }>{ index[key] }</td>)) }
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </header>
            </div>
        )
    }
}
 
export default Databases