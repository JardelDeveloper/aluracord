import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}

function Title(props) {
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 24px;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

// React Element
// function HomePage() {
// JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Title tag="h2">Boas vindas de volta!</Title>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     );
// }
// export default HomePage;

export default function PaginaInicial() {
    const username = 'JardelDeveloper';

    return (
        <>
            <GlobalStyle />
            <Box
                styleSheet={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.custom['background-green'],
                    // backgroundColor: appConfig.theme.colors.primary[500],
                    // backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
                    backgroundImage: 'url(https://sm.ign.com/t/ign_pt/news/h/harry-pott/harry-potter-hogwarts-mystery-is-confusing-players-about-est_48gs.1200.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%',
                        maxWidth: '700px',
                        borderRadius: '5px',
                        padding: '32px',
                        margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        // backgroundColor: appConfig.theme.colors.neutrals[700],
                        backgroundColor: appConfig.theme.colors.custom['background-transparent-black'],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: {
                                xs: '100%',
                                sm: '50%'
                            },
                            textAlign: 'center',
                            marginBottom: '32px',
                        }}
                    >
                        <Title tag="h2">Welcome to Hogwarts!</Title>
                        <Text
                            variant="body3"
                            styleSheet={{
                                marginBottom: '32px',
                                color: appConfig.theme.colors.neutrals[300]
                            }}
                        >
                            {appConfig.name}
                        </Text>

                        <TextField
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    // backgroundColor: appConfig.theme.colors.neutrals[800],
                                    backgroundColor: appConfig.theme.colors.custom['background-transparent-green'],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Alohomora'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                            styleSheet={{
                                backgroundColor: appConfig.theme.colors.custom['button-green']
                            }}
                        >
                            {/* <Image
                                styleSheet={{
                                    borderRadius: '50%',
                                    marginBottom: '16px',
                                    maxWidth: '10%'
                                }}
                                src={`https://cdn-icons.flaticon.com/png/512/625/premium/625077.png?token=exp=1643228566~hmac=aeae414ccfc8eb8d228a0c10baba2397`}
                            /> */}
                        </Button>
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            // backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                fontSize: '16px',
                                color: appConfig.theme.colors.neutrals[200],
                                // backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}