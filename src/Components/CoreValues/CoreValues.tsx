import { AppDispatch, RootState } from "configStore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoreValueList } from "Slices/corevalue";

const CoreValues = () => {
    const { list: listCorevalue } = useSelector(
        (state: RootState) => state.corevalue,
    );
    console.log(listCorevalue);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getCoreValueList());
    }, []);

    return (
        <div>
            <div className="container mx-auto px-5 lg:px-16">
                <div>
                    <h2 className=" text-red-600 md:text-3xl font-bold text-2xl mb-0 md:mb-3 md:leading-6 ">
                        Giá trị cốt lõi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-3 md:gap-8">
                        <div className="bg-white rounded-lg flex-row text-center mb-3 py-10 px-6 text">
                            <div className="flex justify-center ">
                                <svg
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="54px"
                                    height="50px"
                                    viewBox="0 0 54 50"
                                    version="1.1"
                                >
                                    <g
                                        id="Icon-Copy-2"
                                        transform="translate(1.1483154 1.148325)"
                                    >
                                        <g id="hand-heart">
                                            <path
                                                d="M22.9986 6.35451C22.9954 3.60132 21.2092 1.16738 18.5836 0.338762C15.9581 -0.489859 13.0983 0.477783 11.5153 2.7304C10.1404 0.736739 7.74663 -0.295193 5.35317 0.0739977C2.95971 0.443189 0.988121 2.14848 0.277903 4.46377C-0.432316 6.77905 0.243917 9.29657 2.01866 10.9444L11.5153 20.7051L21.012 10.9444C22.2803 9.75489 22.9994 8.09333 22.9986 6.35451L22.9986 6.35451Z"
                                                transform="translate(19.577892 0.1096008)"
                                                id="Path"
                                                fill="rgb(220 38 38)"
                                                fillRule="evenodd"
                                                stroke="none"
                                            />
                                            <path
                                                d="M40.1914 7.85221L45.2038 4.9814C46.8777 4.02476 49.0099 4.59872 49.9774 6.26638L50.0188 6.33757C50.9121 7.85887 50.5718 9.80337 49.2149 10.9309L39.894 18.6247C39.3366 19.0859 38.6772 19.4076 37.9705 19.5628L20.2863 23.4924C19.0641 23.7637 17.7842 23.5244 16.7426 22.8298L5.75081 15.5138C4.99624 15.0107 4.10961 14.7422 3.20268 14.7422L0 14.7422L0 0.96226L8.15311 0.0562315C9.58828 -0.103393 11.0409 0.0779834 12.3927 0.585609L18.6683 2.93853C19.2361 3.15222 19.824 3.30841 20.423 3.40475L32.1634 5.30982C34.0988 5.44949 35.5977 7.06016 35.5981 9.00054L35.5981 9.00054C35.5977 10.9413 34.0981 12.5522 32.1623 12.6913L19.5215 13.5938"
                                                transform="translate(0.005741627 23.300898)"
                                                id="Path"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="#EAB308"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            <h1 className="my-5 font-bold">
                                {listCorevalue[0]?.title}
                            </h1>
                            <p className="my-5 text-gray-500 leading-relaxed tracking-wide">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: listCorevalue[0]?.content,
                                    }}
                                />
                            </p>
                        </div>
                        <div className="bg-white rounded-lg flex-row text-center mb-3 py-10 px-6 text">
                            <div className="flex justify-center ">
                                <svg
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="47px"
                                    height="51px"
                                    viewBox="0 0 47 51"
                                    version="1.1"
                                >
                                    <g
                                        id="Icon"
                                        transform="translate(1.2631569 1.2631578)"
                                    >
                                        <g id="medal">
                                            <path
                                                d="M10.9833 21.9665L0 0L13.0909 0L21.8182 17.4545"
                                                id="Path"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="#EAB308"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.836 21.9644L21.8182 0L8.72727 0L0 17.4545"
                                                transform="translate(21.818182 0)"
                                                id="Path"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="#EAB308"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.2727 30.5455C23.7076 30.5455 30.5455 23.7076 30.5455 15.2727C30.5455 6.83783 23.7076 0 15.2727 0C6.83783 0 0 6.83783 0 15.2727C0 23.7076 6.83783 30.5455 15.2727 30.5455Z"
                                                transform="translate(6.5454545 17.454546)"
                                                id="Oval"
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="#EAB308"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.29964 0L10.8655 5.19709L16.5993 6.03055L12.4495 10.0756L13.4291 15.7876L8.29964 13.0909L3.17018 15.7876L4.14982 10.0756L0 6.03055L5.73382 5.19709L8.29964 0L8.29964 0Z"
                                                transform="translate(13.518545 24.833454)"
                                                id="Path"
                                                fill="rgb(220 38 38)"
                                                fillRule="evenodd"
                                                stroke="none"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            <h1 className="my-5 font-bold">
                                {listCorevalue[1]?.title}
                            </h1>
                            <p className="my-5 text-gray-500 leading-relaxed tracking-wide">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: listCorevalue[1]?.content,
                                    }}
                                />
                            </p>
                        </div>
                        <div className="bg-white rounded-lg flex-row text-center mb-3 py-10 px-6 text">
                            <div className="flex justify-center ">
                                <svg
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="47px"
                                    height="48px"
                                    viewBox="0 0 47 48"
                                    version="1.1"
                                >
                                    <g id="Icon">
                                        <g id="time-machine">
                                            <path
                                                d="M1.06801 0C0.773438 0.413155 0.413155 0.773438 0 1.06801L7.41866 8.48667L8.48667 7.41866L1.06801 0Z"
                                                transform="translate(26.036318 26.036318)"
                                                id="Path"
                                                fill="#EAB308"
                                                fillRule="evenodd"
                                                stroke="none"
                                            />
                                            <path
                                                d="M14.2382 10.5568L20.7059 4.08906C21.2958 3.49917 21.2958 2.54294 20.7059 1.95304C20.116 1.36315 19.1598 1.36315 18.5699 1.95304L12.1022 8.42077C11.5387 8.27046 11.121 8.27046 10.5568 8.42077L2.57844 0.442423C1.98854 -0.147474 1.03232 -0.147474 0.442423 0.442423C-0.147474 1.03232 -0.147474 1.98854 0.442423 2.57844L8.42077 10.5568C8.35506 10.8053 8.30823 11.0606 8.30823 11.3295C8.30823 12.9957 9.66326 14.3507 11.3295 14.3507C12.9957 14.3507 14.3507 12.9957 14.3507 11.3295C14.3507 11.0606 14.3039 10.8053 14.2382 10.5568Z"
                                                transform="translate(12.085161 12.085161)"
                                                id="Path"
                                                fill="#EAB308"
                                                fillRule="evenodd"
                                                stroke="none"
                                            />
                                            <path
                                                d="M23.4146 0C10.5041 0 0 10.5034 0 23.4146C0 23.8323 0.338379 24.1699 0.755311 24.1699C1.17224 24.1699 1.51062 23.8323 1.51062 23.4146C1.51062 11.3372 11.3365 1.51062 23.4146 1.51062C35.4928 1.51062 45.3186 11.3372 45.3186 23.4146C45.3186 35.4921 35.4928 45.3186 23.4146 45.3186C19.1577 45.3186 15.0979 44.1117 11.6084 41.8669L16.0609 37.4143C16.2596 37.2157 16.3313 36.9234 16.2482 36.6552C16.1644 36.3871 15.9386 36.1877 15.6621 36.1371L3.91175 34.0018C3.66854 33.955 3.41778 34.0351 3.24255 34.2103C3.06732 34.3855 2.98952 34.6355 3.03333 34.8795L5.1701 46.6299C5.21995 46.9063 5.42011 47.1321 5.68825 47.2152C5.76227 47.2386 5.83855 47.25 5.91333 47.25C6.11046 47.25 6.30382 47.1722 6.44733 47.0287L10.5154 42.9606C14.3071 45.4758 18.7506 46.8293 23.4146 46.8293C36.3252 46.8293 46.8293 36.3259 46.8293 23.4146C46.8293 10.5034 36.3252 0 23.4146 0Z"
                                                id="Path"
                                                fill="#EAB308"
                                                fillRule="evenodd"
                                                stroke="none"
                                            />
                                            <path
                                                d="M13.0396 3.42566C13.2382 3.22702 13.31 2.93471 13.2269 2.66657C13.1431 2.39844 12.9172 2.19904 12.6408 2.14843L0.890408 0.0131682C0.647198 -0.033661 0.396435 0.0464019 0.221203 0.221634C0.0459705 0.396866 -0.0318265 0.646874 0.0119815 0.890839L2.14876 12.6412C2.19861 12.9177 2.39876 13.1435 2.6669 13.2266C2.74092 13.25 2.81721 13.2613 2.89198 13.2613C3.08912 13.2613 3.28248 13.1835 3.42599 13.04L13.0396 3.42566Z"
                                                transform="translate(3.0213466 33.98866)"
                                                id="Path"
                                                fill="rgb(220 38 38)"
                                                fillRule="evenodd"
                                                stroke="none"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            <h1 className="my-5 font-bold">
                                {listCorevalue[2]?.title}
                            </h1>
                            <p className="my-5 text-gray-500 leading-relaxed tracking-wide">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: listCorevalue[2]?.content,
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
