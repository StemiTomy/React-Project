import { Routes, Route, Navigate } from 'react-router-dom'
import Movies from '../Movies/Movies'

export const Body = ({ apiKey }) => {
    return (
        <Routes apiKey={apiKey}>
            <Route path="/*" element={<Movies apiKey={apiKey} />} />
            <Route path="/movies" element={<Movies apiKey={apiKey} />} />
        </Routes>
    )
}