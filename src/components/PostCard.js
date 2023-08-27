import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { background, greenHighlight, textGray, textLightGray } from '../resources/colors';
import {BsCheckLg} from 'react-icons/bs'

const PostCard = ({ post }) => {
    const categories = post.categories.map(category => category.name).join(', ');

    return <Post>
        <Link to={post.slug}>
            <Title>
                <TestTitle>POSTAGEM</TestTitle>
                <span>{post.title}</span>
            </Title>

            <Description>
                <p><BsCheckLg/>{post.description}</p>
                <p><BsCheckLg/>{categories}</p>
            </Description>

            <Details>
                <p>
                    Publicado em: &nbsp;
                    <Published className=''>{moment(post.created_at).format("LL")}</Published>
                </p>
                <p>Tempo de leitura: <ReadingTime>10m</ReadingTime></p>
            </Details>
        </Link>
    </Post>
}

const Post = styled.article`
    color: white;
    margin-bottom: 60px;

    a{
        color: inherit;
        text-decoration: none;
    }

    &:hover h1 span:last-child{
        text-decoration: underline;
    }
`;

const Title = styled.h1`
    font-size: 1.6rem;
`;


const TestTitle = styled.span`
    font-size: 1.3rem;
    padding: 0.2rem;
    background-color: ${greenHighlight};
    color: ${background};
    margin-right: 1rem;
`;

const Description = styled.div`
    color: ${textGray};
    padding-left: 50px;
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;


    svg{
        color: ${greenHighlight};
        margin-right: .5rem;
    }

    p{
        margin-bottom: 0.4rem;
    }
`;

const Details = styled.div`
    color: ${textLightGray};

    p{
        margin-bottom: 0.4rem;
    }
`;

const Published = styled.span`
    color: ${greenHighlight};
`;

const ReadingTime = styled.span`
    color: ${textGray};
`;





export default PostCard;