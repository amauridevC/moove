import { Container } from "@/components/container";
import CardTrabalhos from "./card";

export default function CardTrabalhos2(){
    return (
        <div>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <CardTrabalhos/>
                <CardTrabalhos/>
                <CardTrabalhos/>
                </div>
            </Container>
        </div>
    )
}