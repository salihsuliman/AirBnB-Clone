import React from 'react'
import './SearchPage.css'
import {Button} from "@material-ui/core"
import SearchResult from './SearchResult.js'


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays • 26 august to 30 
                    august • 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>

            </div>

            <SearchResult 
            img="https://i.insider.com/5b4d679369e6c9ae628b4619?
            width=1100&format=jpeg&auto=webp"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest • 1 bedroom • 1 bed • 1.5
            shared bathrooms • WiFi • Kitchen • Free parking
            • Washing machine"
            star={4.21}
            price="$30 / night"
            total="$233 total"
            
            />

<SearchResult 
            img="https://i.insider.com/5b4d679369e6c9ae628b4619?
            width=1100&format=jpeg&auto=webp"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest • 1 bedroom • 1 bed • 1.5
            shared bathrooms • WiFi • Kitchen • Free parking
            • Washing machine"
            star={4.21}
            price="$30 / night"
            total="$233 total"
            
            />

<SearchResult 
            img="https://i.insider.com/5b4d679369e6c9ae628b4619?
            width=1100&format=jpeg&auto=webp"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest • 1 bedroom • 1 bed • 1.5
            shared bathrooms • WiFi • Kitchen • Free parking
            • Washing machine"
            star={4.21}
            price="$30 / night"
            total="$233 total"
            
            />

        </div>
    )
}

export default SearchPage
