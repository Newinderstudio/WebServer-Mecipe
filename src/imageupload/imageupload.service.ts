import { ForbiddenException, HttpService, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ImageuploadService {

    constructor(private readonly httpService: HttpService) { }

    async directUploadURL() {
        const imageResponse: { data: ImageUploadDirectResponse } = await axios(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.SECRET_CLOUDFLARE_ID}/images/v2/direct_upload`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.SECRET_CLOUDFLARE_API_TOKEN}`,
                },
            }
        );

        if (!imageResponse.data || imageResponse.data.success === false) throw new ForbiddenException(imageResponse.data.errors.join(","));

        return imageResponse.data.result.uploadURL;
    }

    async checkUploadURL(imageId: string) {
        const imageResponse: { data: ImageUploadCheckResponse } = await axios(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.SECRET_CLOUDFLARE_ID}/images/v1/${imageId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.SECRET_CLOUDFLARE_API_TOKEN}`,
                },
            }
        );

        if (!imageResponse.data || imageResponse.data.success === false) throw new ForbiddenException(imageResponse.data.errors.join(","));

        return imageResponse.data.result;
    }
}
