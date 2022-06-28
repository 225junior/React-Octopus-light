import React from 'react'
import "./interface.css"
import Item, { AppTypes } from './Item.model';
import Sidebar from './sidebar';


interface IProps {
}

const Interface: React.FC<IProps> = (IProps) => {
    const [Items, SetItems] = React.useState<Item[]>([])
    const [dragOver, setDragOver] = React.useState(false);
    const handleDragOverStart = () => setDragOver(true);
    const handleDragOverEnd = () => setDragOver(false);


    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }


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

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text');
        console.log(`Elément déplacé: id: ${id}`);
        setDragOver(false);
    }


    /**
     * During the dragging event
     * @param e
     */
    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        // console.log("X: " + e.clientX + " | Y: " + e.clientY)
    }

    /**
     * Only when the dragging start
     * @param event
     */
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('text', event.currentTarget.id);
        console.log(event)
        event.dataTransfer.effectAllowed = 'move';


        // event.dataTransfer.setData('text/html', event.currentTarget);

        // dragSrcEl_ = this;

        // this/e.target is the source node.
        // this.classList.add('moving');
    }




    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />


                <div className="col-sm p-3 vh-100 poly-overflow-scroll">
                    <h1 className="page-header mb-5">Test OCTOPUS <small>V4</small></h1>

                    <div className='d-flex flex-row-reverse'>
                        <button className="btn btn-success" onClick={() => AddItem()}>+</button>
                    </div>
                    <div id="columns-full" className="columns">
                        <div className="row">


                            {
                                Items.map((list, index) => {
                                    let className = dragOver ? "over" : "";

                                    return (
                                        <div className={"col-md-6 mb-1" + className} key={index}>
                                            <div className="card" draggable id={'test-' + index as unknown as string}
                                                onDrag={(event) => handleDrag(event)}
                                                onDragStart={handleDragStart}
                                                onDragOver={enableDropping}
                                                onDrop={handleDrop}
                                                onDragEnter={handleDragOverStart}
                                                onDragLeave={handleDragOverEnd}
                                            >
                                                <img
                                                    src="https://www.kindacode.com/wp-content/uploads/2021/08/phone.jpg"
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


                                            <div className={"column col " + className}
                                    draggable
                                    key={index}
                                    id={'test-' + index as unknown as string}
                                    onDrag={(event) => handleDrag(event)}
                                    onDragStart={handleDragStart}
                                    onDragOver={enableDropping}
                                    onDrop={handleDrop}
                                    onDragEnter={handleDragOverStart}
                                    onDragLeave={handleDragOverEnd}
                                >
                                    <header>{list.Title}</header>
                                    <div className="content" data-col-moves="0">{list.Description}</div>
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