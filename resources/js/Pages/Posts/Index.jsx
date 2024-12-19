import React from "react";
import { usePage } from "@inertiajs/react";
import './style.css'

export default function Index() {
    const { items, pgtitle } = usePage().props
    return (
        <div>
            <h1>{pgtitle}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                nemo nobis laborum ducimus adipisci quia delectus dolorum ab
                sed, a laboriosam iusto similique culpa, ratione at repellendus
                voluptas facilis! Ratione dolorem pariatur quae non expedita
                nihil ut inventore officia rerum doloribus fuga repudiandae nemo
                nobis, nulla eum voluptates nisi error.
            </p>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>

                {items.map(({ id, title, body }) => (
                    <tr>
                        <td>{ id }</td>
                        <td>{ title }</td>
                        <td>{ body }</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
