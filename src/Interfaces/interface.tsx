import React from 'react'
import "./interface.css"
import Item, { AppTypes } from './Item.model';
import Sidebar from './sidebar';
import img from '../images/img1.png';


interface IProps {
}

const Interface: React.FC<IProps> = (IProps) => {
    const [Items, SetItems] = React.useState<Item[]>([])


    const AddItem = () => {
        let title: string = prompt("Titre de l'application") as string;
        let description: string = prompt("Description de l'application") as string;
        let type: number = prompt("Type d'application [0-3]") as unknown as number;


        let Item = [{ Id: 6, Title: title, Type: type, Description: description }]
        if (title === '' || title.length > 50) {
            return alert('Titre top grand ou inexistant')
        } else if (description === '' || description.length > 50) {
            return alert('Description top grande ou inexistante')
        } else if (typeof type === 'number' || type > 4 || type < 0) {
            return alert('Mauvais type')
        }

        SetItems(prev => [...prev, ...Item])
    }


    let list = [
        {
            Id: 1,
            Title: "App 1",
            Type: 1,
            Description: "Test de description"
        },
        {
            Id: 2,
            Title: "App 2",
            Type: 1,
            Description: "Test de description"
        }, {
            Id: 3,
            Title: "App 3",
            Type: 3,
            Description: "Test de description"
        }, {
            Id: 4,
            Title: "App 4",
            Type: 2,
            Description: "Test de description"
        },
    ]

    React.useEffect(() => {
        SetItems(list)
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />


                <div className="col-sm p-3 vh-100 op-overflow-scroll">
                    <h1 className="page-header mb-5">Test OCTOPUS <small>V4</small></h1>

                    <div className='d-flex flex-row-reverse'>
                        <button className="btn btn-success" onClick={() => AddItem()}>+</button>
                    </div>
                    <div id="columns-full" className="columns">
                        <div className="row">

                            {
                                Items.map((list, index) => {

                                    return (
                                        <div className={"col-md-6 mb-1"} key={index}>
                                            <div className="card">
                                                <img
                                                    src={img}
                                                    className="card-img-top"
                                                    alt="Phone"
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{list.Title}</h5>
                                                    <h6 className="card-subtitle mb-2 text-muted">{AppTypes.GesDoc}</h6>
                                                    <p className="card-text">
                                                        {list.Description}
                                                    </p>
                                                    <a href="#" className="btn btn-primary">Ouvrir</a>
                                                </div>
                                            </div>
                                        </div>


                                    )

                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interface;